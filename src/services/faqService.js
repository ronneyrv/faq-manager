import initialFaqs from "../data/faqs.json";

const STORAGE_KEY = "faqs";

const initializeFaqs = () => {
  const storedFaqs = localStorage.getItem(STORAGE_KEY);

  if (!storedFaqs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialFaqs));
  }
};

initializeFaqs();

const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

const getFaqs = async () => {
  await delay();

  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

const getFaqById = async (id) => {
  await delay();

  const faqs = JSON.parse(localStorage.getItem(STORAGE_KEY));

  return faqs.find((faq) => faq.id === Number(id));
};

const createFaq = async (faq) => {
  await delay();

  const faqs = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const newFaq = {
    id: Date.now(),
    ...faq,
  };

  const updatedFaqs = [...faqs, newFaq];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFaqs));

  return newFaq;
};

const updateFaq = async (id, data) => {
  await delay();

  const faqs = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const updatedFaqs = faqs.map((faq) =>
    faq.id === Number(id) ? { ...faq, ...data } : faq,
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFaqs));
};

const deleteFaq = async (id) => {
  await delay();

  const faqs = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const updatedFaqs = faqs.filter((faq) => faq.id !== Number(id));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFaqs));
};

export default {
  getFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
