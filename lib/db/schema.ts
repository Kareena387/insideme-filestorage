import { pgTable, text, uuid, integer, boolean, timestamp }
    from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"


//whatever the table called and their properties
export const files = pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),


    //basic file/folder information

    name: text("name").notNull(),
    path: text("path").notNull(),  //document/project/resume
    size: integer("size").notNull(),
    type: text("type").notNull(),//"folder"


    //storage information
    fileUrl: text("file_url"),  // url to access file
    thumbnail: text("thumbnail_url"),


    //ownership
    userId: text("user_ud").notNull(),
    parentId: uuid("Parent_id"), //parent folder if (null for root items)


    //file/folder flags -boolean flag
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trash").default(false).notNull(),


    //Timesstamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),


})

/*
parent : Each file/folder can have one parent folder
children: Each folder can have many child files/folder
*/


export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id]
    }),

    //relationship to child file/folder
    children: many(files)

}))

//Type Definations - optional

export const file = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;