import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Props {
  onLoadComplete?: () => void;
}

const ThreeModel: React.FC<Props> = ({ onLoadComplete }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      35,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 3.5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3; 
    controls.maxDistance = 3;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.target.set(0, 1, 0);

    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer;

    const loader = new FBXLoader();
    loader.load(
      '/Standing W_Briefcase Idle (1).fbx',
      (object) => {
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.4 / maxDim;
        object.scale.setScalar(scale);
        
        object.position.sub(center.multiplyScalar(scale));
        object.position.y = 0;
        
        scene.add(object);

        mixer = new THREE.AnimationMixer(object);
        const animations = object.animations;
        if (animations && animations.length) {
          animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
        }

        const boundingBox = new THREE.Box3().setFromObject(object);
        const modelCenter = boundingBox.getCenter(new THREE.Vector3());
        
        controls.target.copy(modelCenter);
        controls.update();
 
        
        if (onLoadComplete) {
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }
      },
       
      (error) => {
        console.error('An error occurred loading the model:', error);
        if (onLoadComplete) {
          onLoadComplete();
        }
      }
    );

    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      
      if (mixer) {
        const delta = clock.getDelta();
        mixer.update(delta);
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [onLoadComplete]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeModel;