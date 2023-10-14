import { useEffect } from "react";
import { useRouter } from "next/router";
const Loading = () => {
  const router = useRouter();
  useEffect(() => {
    const loadingSteps = document.querySelectorAll(".loading-step");
    const lastStep = loadingSteps.length - 1;

    loadingSteps.forEach((step, index) => {
      step.style.animationDelay = `${index * 1}s`;
      step.classList.add("fill-color-animation");
    });

    setTimeout(() => {
      router.push("/home"); // Replace with the desired URL of the home page
    }, 12000);
  }, [router, loadingSteps]);
  return (
    <>
      
      <div className="d-flex-cc">
        <span class="loader2"></span>

        <div
          style={{
            border: "2px solid #3E3A38",
            height: "40px",
            width: "50vw",
            padding: "0.25rem",
          }}
        >
          <div
            style={{
              margin: "0",
              padding: "0",
              overflow: "hidden",
              display: "flex",
              gap: "2px",
              width: "100%",
              height: "100%",
            }}
            className="loading-container"
          >
            <div className="loading-step" />
            <div className="loading-step" /> <div className="loading-step" />
            <div className="loading-step" /> <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
          </div>
          <div style={{ margin: "1rem", textAlign: "center" }}>
            <b>Thanks for visiting.</b>
            <br />
            Navneet will be here in a second
          </div>
        </div>
      </div>
    </>
  );
};
export default Loading;

