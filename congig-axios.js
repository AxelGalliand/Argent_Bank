import axios from 'axios';

const axiosInstance = axios.create({
  // Configurations Axios générales ici (baseURL, headers, etc.)
});

// Ajoutez un intercepteur pour les réponses
axiosInstance.interceptors.response.use(
  (response) => {
    // Si la réponse a un statut 401, vous pouvez gérer l'interception ici
    if (response.status === 401) {
      // Mettez ici votre logique pour gérer les réponses 401
      // Par exemple, vous pouvez rediriger l'utilisateur vers la page de connexion
      // ou effectuer une action personnalisée en fonction de vos besoins
      window.location.href = "/sign-in"
      localStorage.removeItem("token")
    }

    // Si la réponse n'est pas un statut 401, retournez-la telle quelle
    return response;
  },
  (error) => {
    // Si une erreur se produit pendant la requête, la gestion de l'erreur peut être effectuée ici
    return Promise.reject(error);
  }
);

export default axiosInstance;
