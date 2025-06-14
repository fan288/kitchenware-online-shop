import './ProgressBar.css';

function ProgressBar({ steps, currentStep }) {
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={step.id} className="progress-step">
          <div
            className={`progress-dot ${currentStep >= step.id ? 'active' : ''}`}
          ></div>
          {index < steps.length - 1 && (
            <div
              className={`progress-line ${currentStep > step.id ? 'active' : ''}`}
            ></div>
          )}
          <span className="progress-label">{step.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;