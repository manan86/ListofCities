import ListGroup from "./components/ListGroup";
//import Message from "./Message";

function App() {
  let items = [
    "New York",
    "London",
    "California",
    "Dallas",
    "Los Angeles",
    "Chicago",
  ];

  const handler = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handler} />
    </div>
  );
}

export default App;
