import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";
import app from "../fierbase/fierbase";

const usePharmacies = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const pharmaciesQuery = query(collection(db, "nearest_pharmacies"), limit(6));
      const querySnapshot = await getDocs(pharmaciesQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPharmacies(dataArray);
    };
    fetchPharmacies();
  }, [db]);

  return pharmacies;
};

export default usePharmacies;
