interface collectionsData {
    id: string;
    title: string;
}

export const generateSelectOptions = (data: any[]) => {
    const collections = document.getElementById('collections');
    data.forEach( (item: collectionsData) => {
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(item.title));
        option.value = item.id;
        collections.appendChild(option);
    })
}