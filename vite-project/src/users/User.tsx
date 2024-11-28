// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

export interface User {
  id: string;
  name: string;
  color: string;
  pet?: {
    name: string;
  };
}
