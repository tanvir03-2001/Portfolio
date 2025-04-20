'use client';
import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'tanvir03-2001'; // ← replace this!

export default function GitHubCard() {
  const [profile, setProfile] = useState(null);
  const [lastCommitTime, setLastCommitTime] = useState(null);
  const [totalCommitsThisYear, setTotalCommitsThisYear] = useState(0);
  const [recentRepos, setRecentRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`)
      .then((res) => res.json())
      .then((events) => {
        const commits = events.filter(event => event.type === 'PushEvent');
        if (commits.length > 0) {
          setLastCommitTime(new Date(commits[0].created_at).toLocaleString());
          const currentYear = new Date().getFullYear();
          const commitsThisYear = commits.filter(event => new Date(event.created_at).getFullYear() === currentYear);
          setTotalCommitsThisYear(commitsThisYear.length);
        }
      });

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc`)
      .then((res) => res.json())
      .then((repos) => setRecentRepos(repos.slice(0, 3)));
  }, []);

  if (!profile) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <main className="space-y-8 p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-12 rounded-t-xl text-white">
        <div className="flex items-center space-x-6">
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold">{profile.name}</h2>
            <p className="text-lg">{profile.bio}</p>
            <p className="text-sm mt-2">@{profile.login}</p>
            <div className="mt-4 flex space-x-4">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
              >
                View GitHub Profile
              </a>
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-transparent border-2 border-white py-2 px-4 rounded-lg hover:bg-white hover:text-indigo-800 transition duration-200"
              >
                View Repositories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Stats</h3>
        <div className="flex justify-between text-lg text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">📁</span>
            <span>{profile.public_repos} Public Repos</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">👥</span>
            <span>{profile.followers} Followers</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">👤</span>
            <span>{profile.following} Following</span>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Info</h3>
        <div className="space-y-4 text-lg text-gray-600">
          <div>
            <strong>Last Commit:</strong> {lastCommitTime || 'No commits found'}
          </div>
          <div>
            <strong>Total Commits This Year:</strong> {totalCommitsThisYear || '0'}
          </div>
          <div>
            <strong>Recently Created Repos:</strong>
            <ul className="list-disc pl-5">
              {recentRepos.length > 0 ? (
                recentRepos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))
              ) : (
                <li>No recent repos found</li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
