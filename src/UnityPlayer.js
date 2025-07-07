import React, { useEffect } from "react";

const UnityPlayer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/unityBuild/Build/builds.loader.js";
        script.onload = () => {
            window.createUnityInstance(document.querySelector("#unity-canvas"), {
                dataUrl: "/unityBuild/Build/webgl.data",
                frameworkUrl: "/unityBuild/Build/build.framework.js",
                codeUrl: "/unityBuild/Build/build.wasm",
                streamingAssetsUrl: "StreamingAssets",
                companyName: "Testing",
                productName: "test_game",
                productVersion: "1.0",
            }).then((unityInstance) => {
                console.log("✅ Unity game loaded!");
            }).catch((message) => {
                alert("❌ Failed to load Unity: " + message);
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <canvas id="unity-canvas" style={{ width: "100%", height: "100vh" }}></canvas>
        </div>
    );
};

export default UnityPlayer;
