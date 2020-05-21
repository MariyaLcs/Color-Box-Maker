import React, { Component } from "react";
import Box from "./Box";
// import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [{ width: 10, height: 40, color: "orange" }] };
    //   this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(evt) {
  //   // call up to the board to flip cells around this cell
  //   this.props.flipCellsAroundMe();
  // }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));

    return (
      <div>
        <h1>Color Box</h1>
        {boxes}
      </div>
    );
  }
}

export default BoxList;
