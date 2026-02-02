export interface CompanyConfig {
  name: string;
  year: number;
  slogan: string;
  services: string[];
}

export const companyData: CompanyConfig = {
  name: "RZK Soft",
  year: new Date().getFullYear(),
  slogan: "High-level solutions for complex problems",
  services: ["Web Dev", "AI Integration", "Cloud Architecture"]
};