import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("jwt");
        if (!token) {
          throw new Error("Token JWT manquant. Veuillez vous connecter.");
        }

        const response = await fetch("http://localhost:1337/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des informations utilisateur."
          );
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (error) return <div className="text-center mt-10 text-pink-800">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-pink-800 uppercase text-center">
        Mon Profil
      </h1>
      <div className="space-y-4 text-lg">
        <p className="flex items-center gap-2">
          <strong className="text-pink-800">Nom d'utilisateur:</strong>
          <span className="text-gray-300">{userData?.username || "Non spécifié"}</span>
        </p>
        <p className="flex items-center gap-2">
          <strong className="text-pink-800">Email:</strong>
          <span className="text-gray-300">{userData?.email || "Non spécifié"}</span>
        </p>
        <p className="flex items-center gap-2">
          <strong className="text-pink-800">Créé le:</strong>
          <span className="text-gray-300">
            {new Date(userData?.createdAt).toLocaleDateString() || "Non disponible"}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <strong className="text-pink-800">Dernière mise à jour:</strong>
          <span className="text-gray-300">
            {new Date(userData?.updatedAt).toLocaleDateString() || "Non disponible"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profil;




