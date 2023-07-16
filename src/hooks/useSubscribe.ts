import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toolsConfig } from "src/config/toolsConfig";
import { ToolType, TradingPlatforms } from "src/types";

export const useSubscribe = () => {
  const [searchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
    machinId: "",
    provider: "",
    username: "",
    primaryTradingPlatform: {
      [TradingPlatforms.TradingView]: false,
      [TradingPlatforms.ThinkOrSwim]: false,
      [TradingPlatforms.NinjaTraders]: false,
      [TradingPlatforms.Sierrachart]: false,
    },
    secondaryTradingPlatform: {
      [TradingPlatforms.TradingView]: false,
      [TradingPlatforms.ThinkOrSwim]: false,
      [TradingPlatforms.NinjaTraders]: false,
      [TradingPlatforms.Sierrachart]: false,
    },
    instruments: "1",
    planId: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
    machinId: "",
    provider: "",
    instruments: "",
    planId: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setData((prevData) => ({
      ...prevData,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      country: user.county || "",
    }));
  }, []);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      planId: (toolsConfig[searchParams.get("toolName") || ""][searchParams.get("type") || ""] as ToolType).planId[
        data.instruments
      ],
    }));
  }, [searchParams, data.instruments]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.lastName ||
      !data.address ||
      !data.city ||
      !data.state ||
      !data.zipCode ||
      !data.country ||
      !data.phone ||
      !data.email
    ) {
      if (!data.firstName) {
        setError((prev) => ({
          ...prev,
          firstName: "First Name is required",
        }));
      }
      if (!data.lastName) {
        setError((prev) => ({
          ...prev,
          lastName: "Last Name is required",
        }));
      }
      if (!data.address) {
        setError((prev) => ({
          ...prev,
          address: "Address is required",
        }));
      }
      if (!data.city) {
        setError((prev) => ({
          ...prev,
          city: "City is required",
        }));
      }
      if (!data.state) {
        setError((prev) => ({
          ...prev,
          state: "State is required",
        }));
      }
      if (!data.zipCode) {
        setError((prev) => ({
          ...prev,
          zipCode: "Zip Code is required",
        }));
      }
      if (!data.country) {
        setError((prev) => ({
          ...prev,
          country: "Country is required",
        }));
      }
      if (!data.email) {
        setError((prev) => ({
          ...prev,
          email: "Email is required",
        }));
      }
      if (!data.phone) {
        setError((prev) => ({
          ...prev,
          phone: "Phone is required",
        }));
      }
    } else {
      setOpenModal(true);
    }
  };

  return {
    data,
    setData,
    error,
    setError,
    handleSubmit,
    openModal,
    setOpenModal,
  };
};
