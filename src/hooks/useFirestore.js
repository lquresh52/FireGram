import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documnet = [];
                snap.forEach(doc => {
                    documnet.push({ ...doc.data(), id: doc.id} );
                });
                setDocs(documnet);
            });
        
        return () => unsub();

    }, [collection])

    return {docs};
}

export default useFirestore;