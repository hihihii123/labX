import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import MultiSelect from "react-native-multiple-select";
let id = 0;
class message {
  constructor(message, username, tags = []) {
    this.message = message;
    this.username = username;
    this.tags = tags;
    this.id = id++;
  }
}
class tag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

function ForumPage() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    new message("Hello", "User", []),
  ]);
  const [username, setUsername] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [
    new tag("Bio", "#F00"),
    new tag("Physics", "#00F"),
    new tag("Chem", "#0F0"),
    new tag("ISS", "#FF0"),
    new tag("E Math", "#F0F"),
    new tag("A Math", "#0FF]"),
    //colours are placeholders, to be added in
  ];
  const handleSend = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        new message(inputText, username, selectedTags),
      ]);
      setInputText("");
      setSelectedTags([])
    }
  };
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 8 }}>
      <Text>
        {item.username}: {item.message}
      </Text>
      <Text>Tags: {item.tags.map(tag => tag.name).join(", ")}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Forum Page
      </Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <MultiSelect
        items={tags.map((tag, index) => ({ id: index, name: tag.name }))}
        uniqueKey="id"
        onSelectedItemsChange={setSelectedTags}
        selectedItems={selectedTags}
        selectText="Pick Tags"
        searchInputPlaceholderText="Search Tags..."
        tagRemoveIconColor="#F00"
        tagTextColor="#CCCCCC"
        selectedItemTextColor="#0B6"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonText="Submit"
      />
      {/*//tags dont actually currently work, need to fix*/}
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <TextInput
          style={{ flex: 1, marginRight: 8, borderWidth: 1, padding: 8 }}
          placeholder="Type your message"
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default ForumPage;
