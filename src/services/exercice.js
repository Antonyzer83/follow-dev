import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

class ExerciceService {
  async getExercices() {
    const db = getFirestore();

    return await getDocs(collection(db, 'exercices'));
  }
  async getExercice(exerciceId) {
    const db = getFirestore();

    return await getDoc(doc(db, 'exercices', exerciceId));
  }
}

export default new ExerciceService();
