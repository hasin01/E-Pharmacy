import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";
import app from "../fierbase/fierbase"; 

const usePharmacies = (initialValue) => {
  const [pharmacies, setPharmacies] = useState([]);
  const [limitStore, setLimitStore] = useState(initialValue);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const pharmaciesQuery = query(collection(db, "nearest_pharmacies"), limit(limitStore));
      const querySnapshot = await getDocs(pharmaciesQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPharmacies(dataArray);
    };
    fetchPharmacies();
  }, [db, limitStore]);

  return [pharmacies, setLimitStore];
};

export default usePharmacies;
