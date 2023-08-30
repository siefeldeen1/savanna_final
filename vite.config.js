import { defineConfig } from 'vite';
// Import the Vite React plugin if needed:
// import react from '@vitejs/plugin-react';

// Define your Vite configuration
export default defineConfig({
  // Enable plugins if necessary
  // plugins: [react()],
  "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }],
  // Define custom routing rules
  // routes: [
  //   {
  //     src: '/[^.]+', // Match URLs that don't have a file extension
  //     dest: '/',     // Redirect to the root path
  //     status: 200    // Use a 200 status code for the redirection
  //   }
  // ],

  // Customize the Vite build configuration
  build: {
    rollupOptions: {
      // ...other options

      // Mark 'module-name' as an external dependency
      external: ['@firebase/app']
    }
  }
});

