"use client";

import { useEffect, useState } from "react";
import { getSimilarRepos } from "@/lib/github";
import { RepoCard } from "./RepoCard";
import { GitHubRepo } from "@/lib/github";

interface SimilarReposProps {
  owner: string;
  repo: string;
}

export function SimilarRepos({ owner, repo }: SimilarReposProps) {
  const [similarRepos, setSimilarRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    async function fetchSimilarRepos() {
      const repos = await getSimilarRepos(owner, repo);
      setSimilarRepos(repos);
    }

    fetchSimilarRepos();
  }, [owner, repo]);

  if (similarRepos.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Similar Repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {similarRepos.map((repo) => (
          <RepoCard
            key={repo.full_name}
            name={repo.name}
            owner={repo.owner.login}
            description={repo.description || undefined}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            language={repo.language || undefined}
          />
        ))}
      </div>
    </div>
  );
}
