import { nonNull, objectType, stringArg, extendType } from "nexus";

export const MemberState = objectType({
  name: "MemberState",
  definition(t) {
    t.string("id");
    t.int("index");
    t.int("userId");
    t.string("title");
    t.string("url");
    t.string("description");
    t.string("imageUrl");
    t.string("category");
  },
});
