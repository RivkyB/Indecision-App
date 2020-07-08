class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return { visibility: !prevState.visibility };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see</p>
          </div>
        )}
      </div>
    );
  }
}

// const appRoot = document.getElementById("app");
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderContent();
// };

// const renderContent = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see</p>
//         </div>
//       )}
//     </div>
//   );

// };
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
