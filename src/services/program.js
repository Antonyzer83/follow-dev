import { collection, getFirestore, getDocs, getDoc, doc } from 'firebase/firestore';

class ProgramService {
  async getPrograms() {
    const db = getFirestore();

    return await getDocs(collection(db, 'programs'));
  }
  async getProgram(programId) {
    const db = getFirestore();

    return await getDoc(doc(db, 'programs', programId));
  }
}

export default new ProgramService();
