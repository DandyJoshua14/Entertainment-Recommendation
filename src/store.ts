import { writable } from 'svelte/store';
import { browser } from "$app/environment";

function createLocalStorageStore(key: string, initialValue: number) {
    // Check if the key already exists in localStorage
    if(browser) {
    const storedValue = localStorage.getItem(key);
  
    // If it exists, use the stored value as the initial value
    // Otherwise, use the provided initialValue
    const initialValueToUse = storedValue ? JSON.parse(storedValue) : initialValue;
  
    // Create a writable store with the initial value
    const { subscribe, set } = writable(initialValueToUse);
  
    // Store the value in localStorage whenever it changes
    subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  
    // Return the store object
    return {
      subscribe,
      set,
    };
}
  }
  export const movies = writable([])
  export const pageNumber = createLocalStorageStore('pagenum', 1);