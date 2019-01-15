/**
 * It changes the id of the users from type ObjectID to a hexString
 * @param {Object[]} users - Seeded users from testing database
 * @returns {Object[]}
 */
const stringifyUsersId = users => {
  const stringifiedUsers = users.map(user => {
    const stringifiedId = { _id: user._id.toHexString() };
    return { ...user, ...stringifiedId };
  });
  return stringifiedUsers;
};

module.exports = stringifyUsersId;
