import React, { useEffect } from "react";

const UnityPlayer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/unityBuild/Build/UnityLoader.js";
        script.onload = () => {
            window.createUnityInstance(document.querySelector("#unity-canvas"), {
                dataUrl: "/unityBuild/Build/Unity.data",
                frameworkUrl: "/unityBuild/Build/Unity.framework.js",
                codeUrl: "/unityBuild/Build/Unity.wasm",
            }).then((unityInstance) => {
                console.log("Unity Loaded!");
            }).catch((message) => {
                alert(message);
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <canvas id="unity-canvas" style={{ width: '100%', height: '100vh' }}></canvas>
        </div>
    );
};

export default UnityPlayer;
