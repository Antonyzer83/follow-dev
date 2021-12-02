import { collection, doc, addDoc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

class ExerciceService {
  async getExercices() {
    const db = getFirestore();

    return await getDocs(collection(db, 'exercices'));
  }
  async getExercice(exerciceId) {
    const db = getFirestore();

    return await getDoc(doc(db, 'exercices', exerciceId));
  }
  async createExercice(exercice) {
    const db = getFirestore();
    
    return await addDoc(collection(db, 'exercices'), exercice);
  }
}

export default new ExerciceService();
