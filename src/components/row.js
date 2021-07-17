export default function Row({ user }) {
  return (
    <div className="bg-green-500 m-5 p-3 grid grid-cols-3 gap-2 justify-start">
      <img
        src={user.avatarUrl}
        alt="user avatar"
        className="w-8 h-8 rounded-full mx-auto"
        width="156"
        height="328"
      />
      {user.name && (
        <a
          href={user.url}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline"
        >
          {user.name}
        </a>
      )}
      <a
        href={user.url}
        target="_blank"
        rel="noreferrer"
        className="no-underline hover:underline text-gray-500"
      >
        {user.login}
      </a>
      {user.bio && <p className="text-gray-600 col-span-3">{user.bio}</p>}
    </div>
  );
}
