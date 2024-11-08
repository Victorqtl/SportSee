const BASE_URL = 'http://localhost:3000';
import { mockedUserMainData, mockedUserPerformance, mockedUserActivity, mockedUserAverageSessions } from "@/services/mockedData";

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
