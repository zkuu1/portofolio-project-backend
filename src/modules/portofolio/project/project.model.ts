import type { Project } from "../../../generated/prisma/client.js";

// ============= request ============
export type CreateProjectRequest = {
    title: string
    description: string
    category: string
    imageUrl: string
}

// ============= data response ============
export type ProjectData = {
    id: number,
    title: string
    description: string
    category: string
    imageUrl: string
    icons?: {
        id: string,
        name: string,
        iconUrl: string
    }
    createdAt?: string
    updatedAt?: string
}

// =============== api respoinse ==============
export type ApiResponse<T> = {
    message: string
    data: T
}

// =============== mappers ==============
export function toProjectListResponse(
  projects: (Project & { category?: category | null })[],
  message: string,
): ApiResponse<CareerWithCategoryData[]> {
  return {
    message,
    data: careers.map(toCareerWithCategory),
  };
}

export function toCareerResponse(
  career: Careers & { category?: Category | null },
  message: string,
): ApiResponse<CareerWithCategoryData> {
  return {
    message,
    data: toCareerWithCategory(career),
  };
}