//problem 4
type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if (shape.shape === "circle" && "radius" in shape) {
    return 3.1416 * (shape.radius * shape.radius);
  } else {
    return shape.height * shape.width;
  }
};
console.log(calculateShapeArea({ shape: "rectangle", height: 5, width: 5 }));
