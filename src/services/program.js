import { collection, getFirestore, getDocs } from 'firebase/firestore';

class ProgramService {
  async getPrograms() {
    const db = getFirestore();

    return await getDocs(collection(db, 'programs'));
  }
}

export default new ProgramService();
