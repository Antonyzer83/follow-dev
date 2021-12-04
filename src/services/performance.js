import { collection, doc, getDoc, getDocs, addDoc, getFirestore } from 'firebase/firestore';

class PerformanceService {
  async getPerformances() {
    const db = getFirestore();

    return await getDocs(collection(db, 'performances'));
  }
  async getPerformance(performanceId) {
    const db = getFirestore();

    return await getDoc(doc(db, 'performances', performanceId));
  }
  async createPerformance(performance) {
    const db = getFirestore();

    return await addDoc(collection(db, 'performances'), performance);
  }
}

export default new PerformanceService();
