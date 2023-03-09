const Notification = (props) => {
  //  Write your code here.
  let { icon, text, className } = props;
  return (
    <div className={className}>
      <img src={icon} className="icon" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1>Notifications</h1>
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information message"
      className="primary-notification"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Information message"
      className="success-notification"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Information message"
      className="warning-notification"
    />
    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Information message"
      className="danger-notification"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
