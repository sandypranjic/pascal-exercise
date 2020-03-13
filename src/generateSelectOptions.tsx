export interface collectionsData {
    id: string;
    title: string;
}

export const generateSelectOptions = (data: any[]) => {
    const collections = document.getElementById('collections');
    collections.innerHTML = "";
    const defaultOption = document.createElement('option');
    defaultOption.appendChild(document.createTextNode("Collections"));
    defaultOption.value = "Collections";
    collections.appendChild(defaultOption);
    data.forEach( (item: collectionsData) => {
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(item.title));
        option.value = item.id;
        collections.appendChild(option);
    })
}