import { collection, getFirestore, getDocs, getDoc, addDoc, doc } from 'firebase/firestore';

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
}

export default new ProgramService();
