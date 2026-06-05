export const addItemToServer = async (task, date) => {
    const response = await fetch("http://localhost:3000/api/todo/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task, date }),
    });
    const item = await response.json();
    return mapServerItemToClientItem(item);
}

export const getItemsFromServer = async () => {
    const response = await fetch("http://localhost:3000/api/todo/");
    const items = await response.json();
    return items.map(mapServerItemToClientItem);
}

export const deleteItemFromServer = async (id) => {
    await fetch(`http://localhost:3000/api/todo/${id}`, {
        method: "DELETE",
    });
    return id;
}

export const markCompleted = async (id, completed) => {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
        method: "PUT",
    });
    const item = await response.json();
    return mapServerItemToClientItem(item);
}

export const mapServerItemToClientItem = (serverItem) => {
    return {
        id: serverItem._id,
        name: serverItem.task,
        dueDate: serverItem.date,
        completed: serverItem.completed,
    };
}