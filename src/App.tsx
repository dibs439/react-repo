import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Gurugram",
    "Hyderabad",
    "Pune",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
