import { collection, getDocs, addDoc, getFirestore } from 'firebase/firestore';

class PerformanceService {
  async getPerformances() {
    const db = getFirestore();

    return await getDocs(collection(db, 'performances'));
  }
  async createPerformance(performance) {
    const db = getFirestore();

    return await addDoc(collection(db, 'performances'), performance);
  }
}

export default new PerformanceService();
