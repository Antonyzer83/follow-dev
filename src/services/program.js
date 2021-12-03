import { collection, getFirestore, getDocs, getDoc, addDoc, setDoc, doc } from 'firebase/firestore';

class ProgramService {
  async getPrograms() {
    const db = getFirestore();

    return await getDocs(collection(db, 'programs'));
  }
  async getProgram(programId) {
    const db = getFirestore();

    return await getDoc(doc(db, 'programs', programId));
  }
  async createProgram(program) {
    const db = getFirestore();

    return await addDoc(collection(db, 'programs'), program);
  }
  async updateProgram(program) {
    const db = getFirestore();

    return await setDoc(doc(db, 'programs', program.id), program);
  }
}

export default new ProgramService();
