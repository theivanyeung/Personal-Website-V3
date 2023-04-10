import { useState, useEffect } from "react";

const Neuron = ({ position, pulsing, age }) => {
  const [x, y] = position;
  let fillColor = "#454545";
  if (pulsing) {
    fillColor = "#FFFFFF";
  } else if (age > 0) {
    fillColor = "#521212";
  }
  return <circle cx={x} cy={y} r={1} fill={fillColor} />;
};

const pulseNeuronsAndConnections = (
  networkData,
  edgeDistanceThreshold,
  pulsingDuration,
  numSourceNeurons
) => {
  const newNeurons = networkData.neurons.map((neuron) => {
    const newAge = neuron.pulsing ? neuron.age + 1 : neuron.age;
    const pulsing = neuron.pulsing && neuron.age < pulsingDuration;
    return { ...neuron, age: newAge, pulsing };
  });

  const newConnections = networkData.connections.map((connection) => {
    const sourceNeuron = networkData.neurons.find(
      (neuron) =>
        neuron.position[0] === connection.startPosition[0] &&
        neuron.position[1] === connection.startPosition[1]
    );

    if (sourceNeuron.pulsing && sourceNeuron.age === pulsingDuration) {
      const targetNeuronIndex = newNeurons.findIndex(
        (neuron) =>
          neuron.position[0] === connection.endPosition[0] &&
          neuron.position[1] === connection.endPosition[1]
      );

      if (targetNeuronIndex !== -1 && newNeurons[targetNeuronIndex].age === 0) {
        newNeurons[targetNeuronIndex] = {
          ...newNeurons[targetNeuronIndex],
          pulsing: true,
          age: 1,
        };
      }

      return { ...connection, pulsing: true, age: 1 };
    } else {
      const newAge = connection.pulsing ? connection.age + 1 : connection.age;
      const pulsing = connection.pulsing && connection.age < pulsingDuration;
      return { ...connection, age: newAge, pulsing };
    }
  });

  const edgeNeurons = networkData.neurons
    .map((neuron, index) => {
      const [x, y] = neuron.position;
      const isEdgeNeuron =
        x <= edgeDistanceThreshold ||
        y <= edgeDistanceThreshold ||
        x >= window.innerWidth - edgeDistanceThreshold ||
        y >= window.innerHeight - edgeDistanceThreshold;

      if (isEdgeNeuron) {
        return index;
      }
      return null;
    })
    .filter((index) => index !== null);

  const randomIndices = [];
  while (randomIndices.length < numSourceNeurons) {
    const randomIndex = Math.floor(Math.random() * edgeNeurons.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  randomIndices.forEach((randomIndex) => {
    const index = edgeNeurons[randomIndex];
    if (!newNeurons[index].pulsing && newNeurons[index].age === 0) {
      newNeurons[index] = { ...newNeurons[index], pulsing: true, age: 1 };
    }
  });

  return { neurons: newNeurons, connections: newConnections };
};

const Connection = ({ startPosition, endPosition, pulsing, age }) => {
  const [x1, y1] = startPosition;
  const [x2, y2] = endPosition;
  let strokeColor = "#454545";
  if (pulsing) {
    strokeColor = "#FFFFFF";
  } else if (age > 0) {
    strokeColor = "#521212";
  }
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={strokeColor}
      strokeWidth={0.1}
    />
  );
};

const euclideanDistance = (position1, position2) => {
  const [x1, y1] = position1;
  const [x2, y2] = position2;
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

const generateFakeData = (numNeurons, maxConnectionDistance) => {
  const neurons = [];
  const connections = [];

  for (let i = 0; i < numNeurons; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const position = [x, y];
    neurons.push({ position, pulsing: false, age: 0 });

    if (i > 0) {
      for (let j = 0; j < i; j++) {
        const otherNeuron = neurons[j];
        if (
          euclideanDistance(position, otherNeuron.position) <=
          maxConnectionDistance
        ) {
          connections.push({
            startPosition: otherNeuron.position,
            endPosition: position,
            pulsing: false,
            age: 0,
          });
        }
      }
    }
  }

  return { neurons, connections };
};

const Test = () => {
  const [networkData, setNetworkData] = useState({
    neurons: [],
    connections: [],
  });

  useEffect(() => {
    const fakeData = generateFakeData(2000, 100);
    setNetworkData(fakeData);

    const interval = setInterval(() => {
      setNetworkData((currentNetworkData) =>
        pulseNeuronsAndConnections(currentNetworkData, 50, 1, 10)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="100vw" height="100vh" style={{ backgroundColor: "#070a0b" }}>
      {networkData.connections.map((connection, index) => (
        <Connection
          key={`connection-${index}`}
          startPosition={connection.startPosition}
          endPosition={connection.endPosition}
          pulsing={connection.pulsing}
          age={connection.age}
        />
      ))}
      {networkData.neurons.map((neuron, index) => (
        <Neuron
          key={`neuron-${index}`}
          position={neuron.position}
          pulsing={neuron.pulsing}
          age={neuron.age}
        />
      ))}
    </svg>
  );
};

export default Test;
