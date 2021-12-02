import { collection, getDocs, getFirestore } from 'firebase/firestore';

class ExerciceService {
  async getExercices() {
    const db = getFirestore();

    return await getDocs(collection(db, 'exercices'));
  }
}

export default new ExerciceService();
