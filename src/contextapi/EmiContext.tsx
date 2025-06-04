import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormFields {
  amount: string;
  interest: string;
  term: string;
}

interface ErrorFields {
  amount: boolean;
  interest: boolean;
  term: boolean;
}


interface EmiContextProps {
  formFields: FormFields;
  setFormFields: React.Dispatch<React.SetStateAction<FormFields>>;
  errorFields: ErrorFields;
  setErrorFields: React.Dispatch<React.SetStateAction<ErrorFields>>;
  isShowMonthlyComp: boolean;
  setIsShowMonthlyComp: React.Dispatch<React.SetStateAction<boolean>>;
  handleMonthlyComp: () => void;
  monthlyEmi : number;
  setMonthlyEmi : React.Dispatch<React.SetStateAction<number>>;
  handleCurrencyChange: (value: number, label:string) => void;
  selectedCurrency : string;
}

const EmiContext = createContext<EmiContextProps | undefined>(undefined);

export const useEmi = () => {
  const context = useContext(EmiContext);
  if (!context) {
    throw new Error("useLoan must be used within a LoanProvider");
  }
  return context;
};

export const EmiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formFields, setFormFields] = useState<FormFields>({
    amount: "",
    interest: "",
    term: "",
  });
  const [isShowMonthlyComp, setIsShowMonthlyComp] = useState(false);
  const [errorFields, setErrorFields] = useState({
    amount: false,
    interest: false,
    term: false,
  });

  const [monthlyEmi , setMonthlyEmi] = useState<number>(0)
   const [baseEmi, setBaseEmi] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const handleMonthlyComp = () => {
    const { amount, interest, term } = formFields;

    const newErrors = {
      amount: !amount,
      interest: !interest,
      term: !term,
    };
    setErrorFields(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);
    if (hasError) return;

    const principal = parseFloat(amount); // P
    const annualInterest = parseFloat(interest);
    const monthlyInterest = annualInterest / 12 / 100; // R
    const tenureMonths = parseFloat(term) * 12; // N

    const numerator =
      principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths);
    const denominator = Math.pow(1 + monthlyInterest, tenureMonths) - 1;

    const emi = numerator / denominator;

    console.log("EMI:", emi.toFixed(2)); // Example: 2051.65
    setBaseEmi(emi)
    setMonthlyEmi(emi)
    setSelectedCurrency("USD")
    setIsShowMonthlyComp(true);
  };

  const handleCurrencyChange = (value : number, label:string) => {
    const convertedEmi = baseEmi  * value;
    setMonthlyEmi(convertedEmi)
    setSelectedCurrency(label);
  }
  return (
    <EmiContext.Provider
      value={{
        formFields,
        setFormFields,
        isShowMonthlyComp,
        setIsShowMonthlyComp,
        errorFields,
        setErrorFields,
        handleMonthlyComp,
        monthlyEmi,
        setMonthlyEmi,
        handleCurrencyChange,
        selectedCurrency
      }}
    >
      {children}
    </EmiContext.Provider>
  );
};
