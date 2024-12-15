export function fetchAndMapJson<T>(url: string): Promise<T> {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} (${response.statusText})`);
            }
            return response.json(); // Здесь `response.json()` возвращает Promise
        })
        .then((json) => json as T) // Приводим JSON к типу T
        .catch((error) => {
            console.error("Error fetching or parsing JSON data:", error);
            throw new Error(`Failed to fetch or parse JSON data: ${(error as Error).message}`);
        });
}
