const BASE_URL = '/api';
import { mockedUserMainData, mockedUserPerformance, mockedUserActivity, mockedUserAverageSessions } from "@/services/mockedData";

/**
 * @function fetchData
 * @description Récupère les données utilisateur depuis l'API ou utilise des données mockées en cas d'erreur
 * @param {string} id - Identifiant de l'utilisateur
 * @param {string} type - Type de données à récupérer ('activity', 'performance', 'average-sessions', '')
 * @returns {Promise<Object>} Données utilisateur
 * @throws {Error} Si le type de données n'est pas supporté ou si les données mockées ne sont pas trouvées
 */
export default async function fetchData(id, type) {
    try {
        const response = await fetch(`${BASE_URL}/user/${id}/${type}`);

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Erreur lors de la récupération des données pour l'utilisateur ${id} (type: ${type}):`, error);

        let mockedData;
        switch (type) {
            case 'activity':
                mockedData = mockedUserActivity(id);
                break;
            case 'performance':
                mockedData = mockedUserPerformance(id);
                break;
            case 'average-sessions':
                mockedData = mockedUserAverageSessions(id);
                break;
            case '':
                mockedData = mockedUserMainData(id);
                break;
            default:
                throw new Error(`Type de données non supporté: ${type}`);
        }

        if (!mockedData) {
            throw new Error(`Données mockées non trouvées pour l'utilisateur ${id}`);
        }

        return mockedData;
    }
}
