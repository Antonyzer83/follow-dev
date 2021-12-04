import { collection, getDocs, getFirestore } from 'firebase/firestore';

class PerformanceService {
  async getPerformances() {
    const db = getFirestore();

    return await getDocs(collection(db, 'performances'));
  }
}

export default new PerformanceService();
