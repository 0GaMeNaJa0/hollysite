import axios from "axios";

export async function fetchUsers() {
  try {
    const response = await axios.get(
      "/data/Users.json"
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function fetchUser(id: string) {
  try {
    const response = await axios.get("/data/Users.json");
    const data = response.data;
    const dataById = data.find((user: any) => user.id === id);
    return dataById;
  } catch (err) {
    console.error(err);
    return null;
  }
}
