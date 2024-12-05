import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: "libsql://pro-saude-database-pro-saude.aws-us-east-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzMyMjc2MzksImlkIjoiMDlhNTNhNTctODA1NS00NzNmLTk5ZTMtNmRmYzcwNmQ1NTY1In0.CUPfFLUF2WHFbd6Bw66mdSNE8h3csLMeEIg9Fzqvy1HXiecTZzI3NyWCUpr5DawCZXiJ1bzI4e-tZzySG_C2AA",
  },
});
