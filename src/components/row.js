export default function Row({ user }) {
  return (
    <div class="flex justify-between items-center bg-white mt-2 p-2">
      <div class="flex ml-2">
        {" "}
        <img
          src={user.avatarUrl}
          alt="user avatar"
          className="w-8 h-8 rounded-full mx-auto"
          width="156"
          height="328"
        />
        <div class="flex flex-col ml-2">
          <span>
            {user.name && (
              <a
                href={user.url}
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:underline text-blue-600 m-1"
              >
                {user.name}
              </a>
            )}
          </span>
          <span class="font-medium text-black">
            <a
              href={user.url}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline text-gray-500 m-1"
            >
              {user.login}
            </a>
          </span>{" "}
        </div>
        {user.bio && <p className="text-gray-600 col-span-3">{user.bio}</p>}
      </div>
    </div>
  );
}
