ç¿s¹                c  ¥   ¹   )   V      ,                   2       	     resource://calendar/modules/calStorageUpgrade.jsm     ëù                                                 	      
                     
                                       ;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Qn   ×o   Qn   f    o   Qn   ;   	â   	=   : o   Qn   
;   	â   	=   
: o   
Qn   ;   	â   	=   : o   Qn   ;   	â   	=   : o   Qn   ;   	â   	=   : o   Qn   ;   	â   	=   : o   Qn   ;   	â   	=   : o   Qn   ;   â   =   : o   Qn   Y   o   Q;   ;      6   6   Q;      6   Q;      6   Q;      6   Q;      6   Q;      6   Q;      6   Q;      6   Q;      6   Q;       6   Q;      !6   Q;      "6   Q;      #6    Q;      $6   !Q;      %6   "Q;      &6   #Q;      '6   $Q;      (6   %Q;      )6   &Q;      *6   'Q;      +6   (QKMÊ]	w	  	  	  ´	  Í	  ð	  	 	 &Ê 9	 M	 Z	 i	 Ã	 Õ	 ï	 		 #	 4	 B	 S	 g	 ~EÚ?ÚDÚMKÍMÐ]nw        ¯  ´  Æ  Í  è  ð  ÷     "ÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿýÔÉÿÿÿý 9 D M Z b i ¸ Ã Ë Õ ã ï þ 	  # + 4 B S _ g {Ð Ú ß çÐ ' .Ð > EÐ V ]Ð  Ð  Ð  Ð   §Ð ³ ºÐ Ë ÑÐ å ìÐ  Ð 0 6Ð B OÐ ¶ ÂÐ ü Ð * 1Ð D KÐ Y `Ð ¢ ªÐ a    Components   utils   importG   resource://gre/modules/Services.jsmQ   resource://calendar/modules/calUtils.jsmc   resource://calendar/modules/calStorageHelpers.jsm#   DB_SCHEMA_VERSION!   EXPORTED_SYMBOLS!   beginTransaction!   createDBDelegate#   commitTransaction'   rollbackTransaction   createStatement!   executeSimpleSQL   removeFunction   createFunction   lastErrorString-   createDBDelegateGetter   upgrade   v2   v1   v3   v4   v5   v6   v7   v8   v9   v10   v11   v12   v13   v14   v15   v16   v17   v18   v19   v20   v21   v22                  #   DB_SCHEMA_VERSION      getSql      getAllSql      getSqlTable      upgradeDB      backupDB                  ÿÿÿÿ      getSql              ¢      ¹      T                                    tblName   tblData   alternateName   altName   sql     #  ]             T D   Q;    â    :  U QT D   	QT     Q  QT  ¸   
>×: =      y  Q  QT T  7¸   
:    QV  =   T T  7¸   
=   : =     Q=   V   =   	V  =   
W  QÈ   Í=   V   =   W  Q;   â   T T  7: K  Q  Q   m- Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQV  =   V  =   V  =   W  QãQLMÿÿÿ}QNÈV  ¸   
     =   : ÓÑÍÉtÑcÎ	ÈÝÏæÕÑ Ò0  ×ÿÿÿñÉç×ßxÓmÕ    getSqlTable   substr	   idx_   shift   (	   join   ,   )   CREATE INDEX 	    ON    ;   CREATE TABLE     (
   Iterator	   next	   done   value	              ,
   replace   );    ÿÿÿÿ         idxTbl       idxOn        ÿÿÿÿ         key    	   type       ,\s*$       ý          N   m   ÿÿÿÿ   î      ÿÿÿÿ   ÿÿÿÿ      getAllSql                     ¹      $                                     version   tblData   sql D  ,  w       
      ;    â    T  :    Q=     QV   K  Q   /mW  V  ;   â   V  V   : =   W  QãQLMÿÿÿÑQNÈ;   ¸   
=   V  : QV  Í
ÈÊÍ04ÊÖÉxÓ}Ú    getSqlTable      getSql   

   cal   LOG?   Storage: Full SQL statement is     ÿÿÿÿ         tblName       1   5       '   A   ÿÿÿÿ   ÿÿÿÿ      getSqlTable               D       ¹                                              schemaVersion   version é  ¡               =    T  D   Q;      QV   ;   q   ;   V   Á
:     Y   ÙÊÌÉ
    v#   DB_SCHEMA_VERSION   upgrade   ÿÿÿÿ      getVersion              ½       ¹      G                        
             db'   selectSchemaVersion   version ò  Û         
         Q@  Q;    â    T  =   : W   QV   ¸   
:     V   5   5   W  QV  @I   V  t   <t   6   L  Qv  Q;   â   T  V  : pÈt   
    V      V   ¸   
:  Qu =   p\Í  ÈËÓÕÌÑÏÑ?    createStatemento   SELECT version FROM cal_calendar_schema_version LIMIT 1   executeStep   row   version-   reportErrorAndRollback   resetm   cal_calendar_schema_version SELECT returned no results    ÿÿÿÿ         e                      `       n   !   ÿÿÿÿ   ÿÿÿÿ      backupDB                7      ¹      F                                     db   currentVersion  B    ´       
      ;    ¸   
=   : Q  Q  Q   Q=   T =      Q;    ¸   
:    QV  ¸   
=   : QV  ¸   
:      <V  ¸   	
;   
5   5   5   ;   â   =   ×: : Q;   5   ¸   
T  5   V   V  :   Q;    ¸   
=   ;   =   V  5   : QÈ   2   Qv   Q;    ¸   
=   V   : QÈ    Õ  ïÓÔÌÈÔËð@ÿÿÿÀ  ÁáÈñÌá    cal   LOGO   Storage: Backing up current database...   local.v   .sqlite)   getCalendarDirectory   append   backup   exists   create   Components   interfaces   nsIFile   DIRECTORY_TYPE   parseInt	   0755   Services   storage%   backupDatabaseFile   databaseFile	   WARN/   Storage: Upgrading to v#   DB_SCHEMA_VERSION7   , a backup was written to: 	   path   ERRORK   Storage: Error creating backup file:     ÿÿÿÿ          backupFilename       backupPath    	   file        ÿÿÿÿ          e            ó          ë   ÿÿÿÿ   
  &   ÿÿÿÿ   ÿÿÿÿ      upgradeDB                }      ¹      f                        '             db    Þ#  Í             ;    ¸   
T  =   C: QT  ¸   
=   :     ;    ¸   
=   : Q;   â   T  : Q;   â   T  ;   	â   	:  : Q;   
â   
T  ;   : Q   -   Qv   Q;   â   T  V   : QÈ       ²   Q;   â   T  :    QV   ;      c;   â   T  V   : Q;    ¸   
=   V   =   ;   : Q;   =   ;   Á
T  V   : Q   )V   ;      ;   5   5   5   pÈ;   â   T  : QÙÏ  ÕÑ5×ÿÿÿëÛÌáÍ
ÈÊ^ÕÖÌ  ßãÊÖÑ    cal   ASSERT;   Database has not been opened!   tableExists7   cal_calendar_schema_version   LOGK   Storage: Creating tables from scratch!   beginTransaction!   executeSimpleSQL   getAllSql+   setDbVersionAndCommit#   DB_SCHEMA_VERSION-   reportErrorAndRollback   getVersion   backupDB?   Storage: Preparing to upgrade v    to v   upgrade   v   Components   interfaces   calIErrors9   STORAGE_UNKNOWN_SCHEMA_ERROR-   ensureUpdatedTimezones    ÿÿÿÿ          e        ÿÿÿÿ          version         X   9          !   ÿÿÿÿ   ¿   ¬   ÿÿÿÿ   ÿÿÿÿ   +   setDbVersionAndCommit                 H       ¹                                              db   version  ¤$  Ð%  ð             ;    â    T  =   T =   : QT  E   QT  5      ;   â   T  : QÒÊ  ñÑÑ !   executeSimpleSQLÅ   DELETE FROM cal_calendar_schema_version;INSERT INTO cal_calendar_schema_version (version) VALUES (   )+   transactionInProgress#   commitTransaction   ÿÿÿÿ   !   createDBDelegate               %       ¹                                      @      funcName	   func'  )                      QV   =      6    QV   Ê Õ 	   name   dbDelegate_   ÿÿÿÿ   +   createDBDelegate/funcÁ              Ñ      ¹      ?                                    db   arguments 5'  Ý(        
      	W   QT     Ç  Q;    ¸   
V   :   QV  ¸   
:  QT     7¸   
T  V  O È   v  Qv  Q;   ¸   
=      =   ;   â   T  : =   	V  : Q;   ¸   

;   ¸   
×
: : QÈ    ÈËÐÈÏ×ËÌÝÍÏ Ú	ÿÿÿ÷Ì     Array   slice   shift   apply   cal   ERROR   Error calling '   ' db error: '   lastErrorString   '.
Exception: 	   WARN   STACK    ÿÿÿÿ      	   args                     e         6   "       	   Á   ÿÿÿÿÿÿÿÿR             Y   j          ÿÿÿÿ   -   createDBDelegateGetter               %       ¹                                      @      getterAttr	   func*  A+                     QV   =      6    QV   ÊÕ 	   name   dbDelegate_get_   ÿÿÿÿ   7   createDBDelegateGetter/funcÁ                        ¹       	                                        db Ä*  ý*              T     T     7   @Õ$    ÿÿÿÿ      createIndex               ¥       ¹      -                                        tblData   tblName   colNameArray   db   idxName   idxOn    /  ï0  9      	      =    T =   T ¸   
=   :    QT =   T ¸   
=   : =     QT  V   T ¸   
Z   : 8QT  V   7¸   
T : Q;   â   T =   	V   =   
V  : Þ#ÉØÏÕÖ×Ë BG 	   idx_   _	   join   (   ,   )   concat   unshift!   executeSimpleSQL7   CREATE INDEX IF NOT EXISTS 7                           ON    ÿÿÿÿ      LOGdb                        ¹      	                                        db   msg  ü1  32  M            T     ;    ¸   
T : QÓ    cal   LOG   ÿÿÿÿ   -   reportErrorAndRollback                 \       ¹      !                                        db   e  ,3  (4  Z            T  E   QT  5       ;   â   T  : Q;   ¸   
=   ;   â   T  : =   T : QT ÑÑÑÍ$Ê ^	 +   transactionInProgress'   rollbackTransaction   cal   ERRORM   ++++++ Storage error!++++++ DB Error:    lastErrorString'   
++++++ Exception:    ÿÿÿÿ   -   ensureUpdatedTimezones                    ¹   3                           U             db   selectTzVersion!   tzServiceVersion   version   versionComp Ò4  JH  i            ;    â    T  =   :    Q;   ¸   
:  5     Q  QV   ¸   
:     V   5   5      @W  Qt   
   V   ¸   
:  Qu ?  QV     &;   5   	¸   

V  V  : W  QV  >  Ø  Q  Q;   ¸   
=   V  =   V  =   : QZ     Q;    â    T  =   :   Q   »m  Q  QV  5   5     Q;   â   V  :   QV     {  Q;   ¸   
:  ¸   
V  5   :   QV  E   QV  5   V     0V  ¸   
Y   V  ]   V  5   ]   : QÈÈãV  ¸   
:  ÿÿÿ:t   R   _  Qv  Q;   ¸   
=   V  =   ;   â   T  : : QÈt   
   V  ¸   
:  Qu ;   â   T  : QV  K  Q  mW  ;   â   T  =   V  5   =   V  5   =   V  5   =   V  5   =   V  5   =    V  5   =   !V  5   =   "V  5   =   #V  5   =   V  5   =   $V  5   =   V  5   =   %V  5   =   &V  5   =   'V  5   =   (V  5   =   )V  5   =   V  5   =   *V  5   =   V  5   =   +V  5   =   V  5   =   ,: QãQLMÿÿþQNÈ;   â   T  =   -;   ¸   
:  5   =   .: Q;   /â   /T  : Q   U  Qv  Q;   ¸   0
B=   1;   â   T  : : Q;   2â   2T  : QV  pÈ    ÈÒÈÌÍ2ËèÑÙÈÑëÉÍ }È   Ö(  Ë+ÍÓÎÈËÌÛØÐÉÎÿÿÿÜ ß ÌÖÓ& ÏÑÑ ÝÍ0 ÊÍåàààààààààà ¡Ñ ®ÒÌ!Ï ®ÖÌß9ÿÿÿÇÑÍ z      createStatementU   SELECT version FROM cal_tz_version LIMIT 1   cal%   getTimezoneService   version   executeStep   row   reset   Services   vc   compare   LOGm   [calStorageCalendar] Timezones have been changed from 	    to 3   , updating calendar data.Y  SELECT DISTINCT(zone) FROM (SELECT recurrence_id_tz AS zone FROM cal_attendees    WHERE recurrence_id_tz IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_events       WHERE recurrence_id_tz IS NOT NULL UNION SELECT event_start_tz   AS zone FROM cal_events       WHERE event_start_tz   IS NOT NULL UNION SELECT event_end_tz     AS zone FROM cal_events       WHERE event_end_tz     IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_properties   WHERE recurrence_id_tz IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_todos        WHERE recurrence_id_tz IS NOT NULL UNION SELECT todo_entry_tz    AS zone FROM cal_todos        WHERE todo_entry_tz    IS NOT NULL UNION SELECT todo_due_tz      AS zone FROM cal_todos        WHERE todo_due_tz      IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_alarms       WHERE recurrence_id_tz IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_relations    WHERE recurrence_id_tz IS NOT NULL UNION SELECT recurrence_id_tz AS zone FROM cal_attachments  WHERE recurrence_id_tz IS NOT NULL);	   zone   getTimezone	   tzid	   push   oldTzId   newTzId   ERROR5   Error updating timezones:    
DB Error    lastErrorString!   beginTransaction!   executeSimpleSQLa   UPDATE cal_attendees    SET recurrence_id_tz = '9   ' WHERE recurrence_id_tz = 'g   '; UPDATE cal_events       SET recurrence_id_tz = 'g   '; UPDATE cal_events       SET event_start_tz   = '9   ' WHERE event_start_tz   = 'g   '; UPDATE cal_events       SET event_end_tz     = '9   ' WHERE event_end_tz     = 'g   '; UPDATE cal_properties   SET recurrence_id_tz = 'g   '; UPDATE cal_todos        SET recurrence_id_tz = 'g   '; UPDATE cal_todos        SET todo_entry_tz    = '9   ' WHERE todo_entry_tz    = 'g   '; UPDATE cal_todos        SET todo_due_tz      = '9   ' WHERE todo_due_tz      = 'g   '; UPDATE cal_alarms       SET recurrence_id_tz = 'g   '; UPDATE cal_relations    SET recurrence_id_tz = 'g   '; UPDATE cal_attachments  SET recurrence_id_tz = '   ';   DELETE FROM cal_tz_version; INSERT INTO cal_tz_version VALUES ('   ');#   commitTransaction   ASSERTE   Timezone update failed! DB Error: '   rollbackTransaction    ÿÿÿÿ         zonesToUpdate       getZones                  	   zone       tz                    refTz                     e                     update                     e         ^  á     p          "         Ú         Ë       :   6       ¿   Ñ  ÿÿÿÿ      ³          ]  u         ó  =          f           @  I          ÿÿÿÿ      addColumn                 e       ¹      &                                        tblData   tblName   colName   colType   db     ·I  K  Ã            ;    ¸   
T T  q=   T =   C: QT  T 7T T 8Q;   â   T =   T =   T =   T : QÓÏ ÄÏÖÔ ÉD    cal   ASSERT   Table 5    is missing from table def!   executeSimpleSQL   ALTER TABLE      ADD COLUMN        ÿÿÿÿ      deleteColumns              4      ¹      M                                     tblData   tblName   colNameArray   db   columns    NL  êN  Õ            T K  Q   mW  T  T 7V  &QãQLMÿÿÿéQNÈY     Q  QT  T 7K   mW    V  ,  ÎãQLMÿÿÿéQNÈ   Q;    â    T ;   â   T T  T =   : : Q;    â    T =   T =   V   ¸   
=   : =   V   ¸   
=   : =   T =   	: Q;    â    T =   
T =   T =   T =   	: QÌ0ÊÚËÐ0éæÿÿÿëÜÐ!ÊÐ%Ð ÜÜÊÊ à9 !   executeSimpleSQL   getSql   _temp   INSERT INTO    _temp  (	   join   ,   ) SELECT      FROM    ;   DROP TABLE    ; ALTER TABLE #   _temp  RENAME TO     ÿÿÿÿ         colName        ÿÿÿÿ         k       P                      )   ÿÿÿÿ   6   9   ÿÿÿÿ   ÿÿÿÿ      copyTable               C     ¹      J                               È      tblData   tblName   newTblName   db   condition   selectOptions   objcopy   arguments   columns¸P  8S  ï      	      	   	Q       Q               7: 8QY   Æ      Q   Q    7K   m         ,  ÎãQLMÿÿÿæQNÈÇ   
Q;    â       ;   â         : : Q;    â       =      =      
¸   
=   : =      =      
¸   
=   : =      =               
=   	=   
: QË ïÛÑÕ0îãÿÿÿëÚ×!ÊÝ;Ò
Õ ø ý !   executeSimpleSQL   getSql   INSERT INTO      (	   join   ,   ) SELECT          FROM       ;   ÿÿÿÿ      objcopy                (      ¹                                       Ø      obj   argumentsQ  =Q  ð            	   Q;    â       ¸   
:  { wñÖÿÿÿû 	   eval   toSource    ÿÿÿÿ          k      V          6   B   ÿÿÿÿ   ÿÿÿÿ      alterTypes              7      ¹      M                                     tblData   tblName   colNameArray   newType   db   columns     ®T  VW  	            T K  Q   mW  T  T 7V  T 8QãQLMÿÿÿæQNÈY     Q  QT  T 7K   mW    V  ,  ÎãQLMÿÿÿéQNÈ   Q;    â    T ;   â   T T  T =   : : Q;    â    T =   T =   V   ¸   
=   : =   V   ¸   
=   : =   T =   	: Q;    â    T =   
T =   T =   T =   	: QÌ0ÊÝËÐ0éæÿÿÿëÜÐ!ÊÐ%Ð ÜÊÊ 9 !   executeSimpleSQL   getSql   _temp   INSERT INTO    _temp  (	   join   ,   ) SELECT      FROM    ;   DROP TABLE    ; ALTER TABLE #   _temp  RENAME TO     ÿÿÿÿ         colName        ÿÿÿÿ         k       S                       ,   ÿÿÿÿ   9   9   ÿÿÿÿ   ÿÿÿÿ      renameTable                 [       ¹                                               tblData   tblName   newTblName   db   overwrite     Y  GZ  #            T    ;    â    T  T T : QT  T T  T 78QT  T &Q;   â   T =   T =   T : Q×ÏÈÖÊ )6    dropTable!   executeSimpleSQL   ALTER TABLE      RENAME TO    ÿÿÿÿ      dropTable                 )       ¹                                              tblData   tblName   db   D[  ¿[  4            T  T &Q;    â    T =   T =   : QÈà> !   executeSimpleSQL+   DROP TABLE IF EXISTS    ;   ÿÿÿÿ      addTable                 0       ¹                                              tblData   tblName   def   db    ñ\  a]  B            T  T T 8Q;    â    T ;   â   T T  : : QËÝÿÿÿë/ !   executeSimpleSQL   getSql   ÿÿÿÿ   '   migrateToIcalString               ±       ¹      $                          
             tblData   tblName   userFuncName   oldColumns   db   updateSql   cleanupSql     _  Ãa  S      	      ;    â    T  T f    =   T : Q=   T =   T =   T ¸   
=   : =      Q;   â   T V   : Q;   	â   	T  T T T : Q=   
T =     Q;   â   T V  : QáÏÙ6ÏÕÚÔÕ!    addColumn	   TEXT   UPDATE %    SET icalString =    (	   join   ,   )!   executeSimpleSQL   deleteColumns   DELETE FROM 3    WHERE icalString IS NULL                     icalString                  ÿÿÿÿ      mapStorageArgs              4      ¹                                           storArgs   mISVA   mappedArgs ¯b  xe  g      
      ;    5   5      QZ     Q>  Q    õmT  ¸   
V  : xV   5   y   BV   5   y   IV   5   y   `V   5   y   wV   5   y   iz   V  ¸   	
@: Q   tV  ¸   	
T  ¸   

V  : : Q   OV  ¸   	
T  ¸   
V  : : Q   *V  ¸   	
T  ¸   
V  : : Q   V  #?W  QQãV  T  5   ÿÿÿÈV  
ÔÉ&  õ  ç  jÎk  Ð
ÉpÉpÉpÉpÉpÊ l(ÐXÙÿÿÿðXÙÿÿÿðXÙÿÿÿðX j-Î w jÕ z    Components   interfaces+   mozIStorageValueArray   getTypeOfIndex   VALUE_TYPE_NULL%   VALUE_TYPE_INTEGER!   VALUE_TYPE_FLOAT   VALUE_TYPE_TEXT   VALUE_TYPE_BLOB	   push   getInt64   getDouble   getUTF8String   numEntries    ÿÿÿÿ         i        )              ÿÿÿÿ   ÿÿÿÿ      upgrade_v2                    ¹   <   ø                                     db   version   tblData  @g  Þo        	      ;    â    T  =   : QY   Y   =   ]   ]   Y   =   ]   =   ]   =   ]   =   ]   	=   ]   
=   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   ]   Y   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   =   ]   ]    Y   =   !]   =   "]   #]   $Y   =   ]   =   ]   %=   ]   &=   ']   (=   ]   )=   ]   *=   ]   +=   ]   ,=   ]   -=   ]   .=   ]   /=   ]   0=   ]   1=   ]   2=   ]   3=   ]   4=   ]   5]   6Y   =   ]   =   ]   7=   "]   8]   9   QV   K  Q   %mW  ;   :â   :T  =   ;V  : QãQLMÿÿÿÛQNÈV   ÖÏ ÊÊÊÊÊÊÊÊÊÊÊÊÊÊÊÊÊÏÊÊÊÊÊÊÏÊÏÊÊÊÊÊÊÊÊÊÊÊÊÊÊÊÊÏÊÊÔÍ0*Êè    LOGdb7   Storage: Upgrading to v1/v2   INTEGER   version7   cal_calendar_schema_version   cal_id   item_type   STRING   id   time_created   last_modified   title   priority   privacy   ical_status   flags   event_start   event_end   event_stamp   todo_entry   todo_due   todo_completed   todo_complete   alarm_id   cal_items   item_id   attendee_id   common_name	   rsvp	   role   status	   type   cal_attendees'   INTEGER PRIMARY KEY	   BLOB   alarm_data   cal_alarms   recur_type   recur_index   BOOLEAN   is_negative   dates   end_date   count   interval   second   minute	   hour   day   monthday   yearday   weekno   month   setpos   cal_recurrence   key   value   cal_properties!   executeSimpleSQL+   DROP TABLE IF EXISTS     ÿÿÿÿ         tbl       N  +       D  7   ÿÿÿÿ   ÿÿÿÿ      upgrade_v3              V      ¹                               G      P      db   version   tbl p  Úz  ç      
      ;    ¸   
T ×E   Q   T :    Q;   â      =   : Q;   â      : Q  Q  Q;   â   V   =   =      =   : Q;   â   V   =   =   	   =   
: Q;   â   V   =      : Qf     Q;   â   V   =   V     : Q;   â   V   =   =   =      : Q;   â   V   =   =   =      : Q;   â   V   =   =   =      : Q;   â   V   =   =   =      : Qf     Q;   â   V   =   	V     : Q;   â   V   =   	=   =      : Q;   â   V   =   	=   =      : Q;   â   V   =   	=   =      : Q;   â   V   =   	=   =      : Q;   â   V   =   	=   =      : Q;   â   V   =      : Q   ;   â   =   =   : Q;   â   =   =   : Q;   â   =   	=   : Q;   â   =   	=   : Q;   â   =   	=   : Q;   â      ×: QÈ   /  Qv  Q;   â      V  : pÈ    V   àÈØÓ ÎÍææÜÊ úàææææÊ àæææææÜ  ØØØØØÛÌÓË    upgrade   v2   LOGdb1   Storage: Upgrading to v3!   beginTransaction   copyTable   cal_items   cal_events   item_type = 0   cal_todos   item_type = 1   dropTable   deleteColumns   addColumn   event_start_tz   VARCHAR   event_end_tz   alarm_time   INTEGER   alarm_time_tz   todo_entry_tz   todo_due_tz#   todo_completed_tz   cal_alarms   updateSql   event_start   event_end   todo_entry   todo_due   todo_completed+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         removeEventCols       removeTodoCols             
            item_type      item_type      todo_entry      todo_due      todo_completed      todo_complete      alarm_id                                    item_type      event_start      event_end      event_stamp      alarm_id                            updateSql                 7       ¹                                              tbl   field  Àx  qy              ;    â       =   T  =   T =   T =   : QèÊ E !   executeSimpleSQL   UPDATE     SET !   _tz='UTC' WHERE     IS NOT NULL    ÿÿÿÿ         e         T   Ò      V   Ë  ÿÿÿÿ   '  #   ÿÿÿÿ   ÿÿÿÿ      upgrade_v4                    ¹      9                                     db   version   tbl  m{  v}  .            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Qf    K  Q   \mW  ;   â   V   =   V  =   =   T  : Q;   â   V   =   V  =   	=   
T  : QãQLMÿÿÿ¤QNÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ  Î0aÊéöØÌÑË    upgrade   v3   LOGdb1   Storage: Upgrading to v4!   beginTransaction   addColumn	   cal_   recurrence_id   INTEGER!   recurrence_id_tz   VARCHAR+   setDbVersionAndCommit-   reportErrorAndRollback                     events      todos      attendees      properties                   ÿÿÿÿ         tblid        ÿÿÿÿ         e         N         a   b      W   n   ÿÿÿÿ   Þ   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v5              4      ¹      @                                     db   version   tbl  K~    E            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Qf    K  Q   mW  ;   â   V   =   V  =   =   T  : Q;   â   V   =   V  =   	=   T  : Q;   â   V   =   V  =   
=   T  : QãQLMÿÿÿ{QNÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ  ´Î0  ÊééöØÌÑË    upgrade   v4   LOGdb1   Storage: Upgrading to v5!   beginTransaction   addColumn	   cal_   alarm_offset   INTEGER   alarm_related   alarm_last_ack+   setDbVersionAndCommit-   reportErrorAndRollback                     events      todos                   ÿÿÿÿ         tblid        ÿÿÿÿ         e         N   ¸      a         W      ÿÿÿÿ     !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v6                    ¹      `                                     db   version   tbl  S    ]            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q  Q  Q  Q  Q  Qf     Q;   â   V   =   V  =   T  : Qf     Q;   â   V   =   V  =   T  : Qf     Q;   â   V   =   	V  =   T  : Qf     Q;   â   V   =   
V  =   T  : Qf     Q;   â   V   =   V  =   T  : Q;   â   T  ×: QÈ   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ ßÊãÊãÊãÊãÊãÙÌÑË    upgrade   v5   LOGdb1   Storage: Upgrading to v6!   beginTransaction   alterTypes   cal_events	   TEXT   cal_todos   cal_attendees   cal_recurrence   cal_properties+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         eventCols       todoCols       attendeeCols       recurrenceCols       propertyCols             
            id      title      privacy      ical_status   !   recurrence_id_tz      event_start_tz      event_end_tz      alarm_time_tz                     	   
   	         id      title      privacy      ical_status   !   recurrence_id_tz      todo_entry_tz      todo_due_tz   #   todo_completed_tz      alarm_time_tz                        
            item_id   !   recurrence_id_tz      attendee_id      common_name   	   role      status   	   type                                    item_id      recur_type      dates      second      minute   	   hour      day      monthday      yearday      weekno      month      setpos                                    item_id   !   recurrence_id_tz      key                   ÿÿÿÿ         e         N         S     ÿÿÿÿ   g  !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v7               6       ¹                                              db   version   tbl                  ;    ¸   
T  T :    Q;   â   T  =   : QV   ÒÈÖ    upgrade   v6   LOGdb1   Storage: Upgrading to v7   ÿÿÿÿ      upgrade_v8               6       ¹                                              db   version   tbl    *              ;    ¸   
T  T :    Q;   â   T  =   : QV   ÒÈÖ    upgrade   v7   LOGdb1   Storage: Upgrading to v8   ÿÿÿÿ      upgrade_v9               6       ¹                                              db   version   tbl  ¸  J              ;    ¸   
T  T :    Q;   â   T  =   : QV   ÒÈÖ    upgrade   v8   LOGdb1   Storage: Upgrading to v9   ÿÿÿÿ      upgrade_v10              ½       ¹      3                                     db   version   tbl  ò  H  §            ;    ¸   
T ×	E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   V   =   Y   =   ]   T  : Q;   	â   	T  ×
: Q   -  Qv  Q;   
â   
T  V  : pÈ    V   ÞÈÖÑ=Ø"ÍÿÿÿÞØÌÑË    upgrade   v9   LOGdb3   Storage: Upgrading to v10!   beginTransaction   addTable   cal_tz_version	   TEXT   version+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         e         N   A          !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v11              Û       ¹      G                                     db   version   tbl  ì  ²  º            ;    ¸   
T ×
E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   V   =   Y   =   ]   =   	]   
=   ]   =   ]   T  : Q;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ[ØÊÊÊÊ À ÆØÌÑË    upgrade   v10   LOGdb3   Storage: Upgrading to v11!   beginTransaction   addTable   cal_attachments	   TEXT   item_id	   BLOB	   data   format_type   encoding+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         e         N   _       ®   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v12                    ¹      P                                     db   version   tbl  '  _  Ñ      	      ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   V   =   =   =   T  : Q;   â   V   =   =   	=   
T  : Q;   â   V   =   Y   =   ]   =   ]   =   
]   T  : Q;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ  ääØÊÊÊ Ú ßØÌÑË    upgrade   v11   LOGdb3   Storage: Upgrading to v12!   beginTransaction   addColumn   cal_attendees   is_organizer   BOOLEAN   properties	   BLOB   addTable   cal_metadata   INTEGER   cal_id   TEXT UNIQUE   item_id   value+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         e         N          ì   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v13              R      ¹      ¦       	                               db   version   tbl  "    ì            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q  Q;   â   V   =   f   =   T  : QY     QT     ªf   K  Q   mW    Q;   â   T  =   	V  :   Q   (mV  V  5   
5   V  5   
5   8QãV  ¸   
:  ÿÿÿÍt   
   V  ¸   
:  Qu ÈãQLMÿÿÿvQNÈf   K  Q   mW  ;   â   V   =   V  =   =   T  : QV  K  Q   FmW  ;   â   T  =   V  =   V  V  7=   V  =   : QãQLMÿÿÿºQNÈãQLMÿÿÿmQNÈ;   â   T  =   : Q;   â   T  =   : Q;   â   T  ×: QÈ   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ ÐäÊÎ0  ÐÍÊ ÷ÈC(8 úâ úßß Î0  ÊéÍ0KÊ×ÐÑ 	Þ ÖÖÙÌÑË    upgrade   v12   LOGdb3   Storage: Upgrading to v13!   beginTransaction   alterTypes   cal_metadata	   TEXT   createStatement7   SELECT id, cal_id FROM cal_   row   id   cal_id   executeStep   reset   addColumn	   cal_   INTEGER!   executeSimpleSQL   UPDATE cal_!      SET cal_id = %    WHERE item_id = '   ']   DROP INDEX IF EXISTS idx_cal_properies_item_id±   CREATE INDEX IF NOT EXISTS idx_cal_properies_item_id ON cal_properties(cal_id, item_id);+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         calIds                         item_id                                    events      todos                                itemTable                 	   stmt                         attendees      recurrence      properties      attachments                                tblid                    itemId        ÿÿÿÿ         e         N   Ô     B          L               È   G      Í   8       O   Î  ÿÿÿÿ                £            8  ¥          x  X         #  !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v14              Û       ¹      G                                     db   version   tbl    É              ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   V   =   Y   =   ]   =   	]   
=   	]   =   	]   T  : Q;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ[ØÊÊÊÊ % +ØÌÑË    upgrade   v13   LOGdb3   Storage: Upgrading to v14!   beginTransaction   addTable   cal_relations   INTEGER   cal_id	   TEXT   item_id   rel_type   rel_id+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         e         N   _       ®   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v15              ¸       ¹      +                                     db   version   tbl  S  «  6      	      ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   V   =   =   =   T  : Q;   	â   	T  ×: Q   -  Qv  Q;   
â   
T  V  : pÈ    V   ÞÈÖÑ8äØÌÑË    upgrade   v14   LOGdb3   Storage: Upgrading to v15!   beginTransaction   addColumn   cal_todos   todo_stamp   INTEGER+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         e         N   <          !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v16                    ¹      °                        (      @      db   version   tbl À  ©±  O            ;    ¸   
T ×E   Q   T :    Q;   â      =   : Q;   â      : Q  Q  Q;   â      =   ×Y      ]   : Q;   â   V   =   	Y   =   
]   =   ]   =   
]   =   ]   =   ]      : Q     QV  =   : QV  =   : Q;   â      =   : Q;   â      =   ;   5   =   : Q;   â      =   ;   5   =   : Qf     Qf   K  Q   /mW  ;   â   V   =   V  V     : QãQLMÿÿÿÑQNÈ;   â      ×: QÈ   /  Qv  Q;   â      V  : pÈ    V   àÈØÓ ÍÛÊ T {ØÊÊÊÊÊ { Ê ÎÎØÔË   ÔË   ¨ÊÎ04ÊòÛÌÓË    upgrade   v15   LOGdb3   Storage: Upgrading to v16!   beginTransaction   createFunction   translateAlarm   onFunctionCall   addTable   cal_alarms   INTEGER   cal_id	   TEXT   item_id   recurrence_id!   recurrence_id_tz   icalString   cal_events   cal_todos   removeFunction!   executeSimpleSQLS   UPDATE cal_events    SET flags = flags |    CAL_ITEM_FLAG   HAS_ALARMSÇ    WHERE id IN  (SELECT item_id      FROM cal_alarms     WHERE cal_alarms.cal_id = cal_events.cal_id)Q   UPDATE cal_todos    SET flags = flags | Ç    WHERE id IN  (SELECT item_id      FROM cal_alarms      WHERE cal_alarms.cal_id = cal_todos.cal_id)   deleteColumns	   cal_+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         copyDataOver    	   cols                 translateAlarm                a      ¹                              6             storArgs ½  (§  U              Q  Q  Q  Q   Q;    â    T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ;   ¸   
:    QV      UV  ;   â   V  ×
: ?6   QV  ;   ¸   	
:  6   QV  5   V   6   
Q   ÞV     Õ  QV  ;   5   5   5   6   Q;   ¸   
:    QV  V  6   QV  =      JV  ;   ¸   
:  5   6   QV  ¸   
;   ¸   
:  : W  Q   ,V  ;   ¸   
:  ¸   
V  : 6   QV  V  6   QÈV  5   ÈÈ   7   Qv   Q;   ¸   
=   V   : QV   pÈ     )ßÍÔ WÉçççØÌÈPÔËÐÉØËÞÌÈÎÊE jÐÎ×$ÿÿÿèÍÐ×ÏÒÌÚÌ    mapStorageArgs	   next	   done   value   cal   createAlarm   related   parseInt   offset   createDuration   inSeconds   Components   interfaces   calIAlarm-   ALARM_RELATED_ABSOLUTE   createDateTime   nativeTime   floating   timezone%   getTimezoneService   defaultTimezone   getInTimezone   UTC   getTimezone   alarmDate   icalString   ERROR3   Error converting alarms:     ÿÿÿÿ          aOffset       aRelated       aAlarmTime       aTzId       alarm                     alarmDate        ÿÿÿÿ          e            -         #  ÿÿÿÿ   M  Ï       ÿÿÿÿ'            /  +   ÿÿÿÿ             copyDataOver               8       ¹      "                                        tbl   transAlarm Ç¨  g¬              =       Q;   â      =   V   =   T  =   : QÊÔ Ê  D    translateAlarm(alarm_offset, alarm_related, alarm_time, alarm_time_tz)!   executeSimpleSQL±  INSERT INTO cal_alarms (cal_id, item_id,                        recurrence_id,                         recurrence_id_tz,                         icalString) SELECT cal_id, id, recurrence_id,        recurrence_id_tz,       FROM      WHERE alarm_offset IS NOT NULL     OR alarm_time IS NOT NULL;                     alarm_time      alarm_time_tz      alarm_offset      alarm_related                                    events      todos                                tblid        ÿÿÿÿ         e         T          5       V     ÿÿÿÿ     A          Ü  #   ÿÿÿÿ   ÿÿÿÿ      upgrade_v17                    ¹      ©                                     db   version   tbl  S³  ¼  Â            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Qf    K  Q  bmW    Q  QC  Q  QT  ¸   
=   V  =   : W  QV  ¸   
:  Qt   '   =  Qv  QBW  QÈt   
    V     V  ¸   	
:  Qu V   D   
QT      W;   
â   
V   =   V  =   =   T  : Q;   
â   
V   =   V  =   =   T  : Q;   â   V   =   V  =   V  =   T  @=   : Q;   â   V   =   V  =   =   V  T  C: QÈãQLMÿÿþQNÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ Î0 gÖ7 ÐÏ ÐÈÙÌÑÑ âËéé éÎÊÐ é ïÎÐÊ ïÒ öØÌÑË    upgrade   v16   LOGdb3   Storage: Upgrading to v17!   beginTransaction   createStatemento   SELECT recurrence_id_tz,       recurrence_id  FROM cal_    LIMIT 1   executeStep   finalize   addColumn	   cal_   recurrence_id   INTEGER!   recurrence_id_tz	   TEXT   copyTable	   _v17   DISTINCT   renameTable+   setDbVersionAndCommit-   reportErrorAndRollback                     alarms      relations      attachments                   ÿÿÿÿ         tblName                    hasColumns    	   stmt                    e        ÿÿÿÿ         e         N        a   h        X          ;      W   t  ÿÿÿÿ   h   V         »            ä  !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v18              è      ¹      k       
                              db   version   tbl  ¾½  Ã              ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q  Q  Qf     QV  ¸   
f   :   Qf   K  Q   -mW  ;   â   V   =   V  V  T  : QãQLMÿÿÿÓQNÈf   K  Q   RmW  ;   â   V   =   V  f   T  : Q;   â   V   =   V  f   T  : QãQLMÿÿÿ®QNÈ;   â   V   =   V  T  : Q;   	â   	T  =   
: Q;   â   V   =   V  T  : Q;   â   V   =   V  T  : Q;   â   T  ×: QÈ   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ hÍÊÐ	ÈÎ02ÊðÎ0WÊäñÞÖÞÞÙÌÑË    upgrade   v17   LOGdb3   Storage: Upgrading to v18!   beginTransaction   concat   createIndex	   cal_   cal_metadata!   executeSimpleSQL]   DROP INDEX IF EXISTS idx_cal_properies_item_id   cal_properties   cal_recurrence+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         simpleIds       allIds                         cal_id      item_id                                    recurrence_id   !   recurrence_id_tz                                    alarms      attachments      attendees      relations                                tblName                         events      todos                                tblName                         flags      cal_id      recurrence_id                                    id      cal_id      recurrence_id                   ÿÿÿÿ         e         N   l     ×   X         3       P   e  ÿÿÿÿ      ?          Í   d       	   »  !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v19              Ü       ¹   	   6                                     db   version   tbl  ÏÃ  Æ  1            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Qf    K  Q   -mW  ;   â   V   V  f   =   T  : QãQLMÿÿÿÓQNÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ\Î02ÊðØÌÑË    upgrade   v18   LOGdb3   Storage: Upgrading to v19!   beginTransaction   alterTypes	   TEXT+   setDbVersionAndCommit-   reportErrorAndRollback      	   
   	         cal_alarms      cal_attachments      cal_attendees      cal_events      cal_metadata      cal_properties      cal_recurrence      cal_relations      cal_todos                   ÿÿÿÿ         tblName                         cal_id                   ÿÿÿÿ         e         N   `      a   3      W   ?   ÿÿÿÿ   ¯   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v20              Ü       ¹   	   1                                     db   version   tbl  IÇ  É  K            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Qf    K  Q   -mW  ;   â   V   V  f   =   T  : QãQLMÿÿÿÓQNÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ\Î02ÊðØÌÑË    upgrade   v19   LOGdb3   Storage: Upgrading to v20!   beginTransaction   addColumn   INTEGER+   setDbVersionAndCommit-   reportErrorAndRollback                     cal_events      cal_todos                   ÿÿÿÿ         tblName                         offline_journal                   ÿÿÿÿ         e         N   `      a   3      W   ?   ÿÿÿÿ   ¯   !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v21              f      ¹      |                                     db   version   tbl  ÅÉ  ?Ø  `            ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : QT     Ï  Q  Q  Q  Q  Q=     Q;   â   V  =   : Q=     Q;   	â   	T  V  :   Q;   	â   	T  V  :   Q>  Q mãV  ¸   

:  QV  ¸   

:  QT  5   >ÿÿÿÕ;   â   T  =   : QÈ;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ  æãÊ ØÊ ÑÈÑÈ(")+ ÏÏÏ ×ØÌÑË    upgrade   v20   LOGdb3   Storage: Upgrading to v21!   beginTransaction  INSERT INTO cal_recurrence             (item_id, cal_id, recur_type, recur_index,             is_negative, dates, end_date, count,             interval, second, minute, hour, day,             monthday, yearday, weekno,  month, setpos)     SELECT item_id, cal_id, "x-date" AS recur_type,             (SELECT MAX(recur_index)+1               FROM cal_recurrence AS rinner               WHERE rinner.item_id = router.item_id                AND rinner.cal_id = router.cal_id) AS recur_index,            is_negative,            SUBSTR(dates, 0, LENGTH(dates) - LENGTH(LTRIM(dates, REPLACE(dates, ",", ""))) + 1) AS dates,            end_date, count, interval, second, minute,            hour, day, monthday, yearday, weekno, month,            setpos       FROM cal_recurrence AS router       WHERE recur_type = "x-dateset"         AND dates != ""	   dump   
K  UPDATE cal_recurrence   SET dates = SUBSTR(dates, LENGTH(dates) - LENGTH(LTRIM(dates, REPLACE(dates, ",", ""))) + 2) WHERE recur_type = "x-dateset"   AND dates != ""   createStatement   execute   affectedRows!   executeSimpleSQLs   DELETE FROM cal_recurrence WHERE recur_type = "x-dateset"+   setDbVersionAndCommit-   reportErrorAndRollback    ÿÿÿÿ         insertSQL       updateSQL       insertStmt       updateStmt       insertedRows        ÿÿÿÿ         e         N   ê       Ù   0       [   Å   ÿÿÿÿ   9  !   ÿÿÿÿ   ÿÿÿÿ      upgrade_v22              ú      ¹      Æ       
                              db   version   tbl   Ù  éù  ª      	      ;    ¸   
T ×E   	QT  T :    Q;   â   T  =   : Q;   â   T  : Q;   â   T  =   ×Y       ]   : Q;   â   V   =   	=   f   T  : Q;   â   T  =   
×Y      ]   : Q;   â   V   =   =   
f   T  : Q;   â   T  =   ×Y      ]   : Q;   â   V   =   =   f   T  : Q;   â   T  =   ×Y      ]   : Q;   â   V   =   f   =   T  : Q;   â   T  =   : Q;   â   V   =   =   f   T  : Q;   â   T  ×: Q   -  Qv  Q;   â   T  V  : pÈ    V   ÞÈÖÑ zÙÊ ° ÀØÈ ÀÙÊ Ä ÒØÈ ÒÙÊ Ö ûØ û  ÙÊ   JäÖ VØ V \ØÌÑË    upgrade   v21   LOGdb3   Storage: Upgrading to v22!   beginTransaction   createFunction'   translateAttachment   onFunctionCall'   migrateToIcalString   cal_attachments#   translateRelation   cal_relations#   translateAttendee   cal_attendees'   translateRecurrence   addColumn   cal_recurrence   !   executeSimpleSQL  UPDATE cal_recurrence SET tmp_date_tz = (SELECT e.flags FROM cal_events AS e WHERE e.id = cal_recurrence.item_id AND e.cal_id = cal_recurrence.cal_id UNION SELECT t.flags FROM cal_todos AS t WHERE t.id = cal_recurrence.item_id AND t.cal_id = cal_recurrence.cal_id)+   setDbVersionAndCommit-   reportErrorAndRollback   ÿÿÿÿ   '   translateAttachment                ;      ¹      F                                     storArgs bÚ  tÜ  ±              Q  Q  Q   Q;    â    T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ;   ¸   
:    QV  ;   ¸   
V   : 6   QV  V  6   QV  V  6   	QV  5   
ÈÈ   7   Qv   Q;   ¸   
=   V   : QV   pÈ     ÙÍÔÿÿÿáÉççØÌ	ÈÔÉÎÎÒÌÚÌ    mapStorageArgs	   next	   done   value   cal!   createAttachment   uri   makeURL   formatType   encoding   icalString   ERROR;   Error converting attachment:     ÿÿÿÿ          aData       aFmtType       aEncoding       attach        ÿÿÿÿ          e                     þ   ÿÿÿÿÿÿÿÿ            	  +   ÿÿÿÿ                  	   data      format_type      encoding                  ÿÿÿÿ   '   translateAttachment                ñ       ¹      ;                                     storArgs ¸Ý  ß  Å      
        Q  Q   Q;    â    T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     QQQ;   ¸   
:    QV  V   6   QV  V  6   QV  5   ÈÈ   7   Qv   Q;   ¸   	
=   
V   : QV   pÈ      ¹ÓÍÔÿÿÿëÉçØÌÈÎÎÒÌÚÌ    mapStorageArgs	   next	   done   value   cal   createRelation   relType   relId   icalString   ERROR7   Error converting relation:     ÿÿÿÿ          aRelType       aRelId       relation        ÿÿÿÿ          e            ½          µ   ÿÿÿÿÿÿÿÿ·             ¿   +   ÿÿÿÿ                     rel_type      rel_id                  ÿÿÿÿ   '   translateAttachment                R      ¹      ®                        ?             storArgs ¾à  æ  ×              Q  Q  Q  Q  Q  Q  Q  Q   Q;    â    T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ;   ¸   
:    QV  V   6   QV  V  6   QV  >H   V  =   	6   QV  ?H   V  =   
6   QV  V  6   QV  V  6   QV  V  6   QV  V    6   QV     âV  ¸   
=   : K  	Q   ´mW  	  Q  
QV  	¸   
=   : - Á
:  ¸   
:  5      Q   
5     
Q¸   
:  5      Q   
5     QQQV  ¸   
;   â   V  
: ;   â   V  : : QÈãQLMÿÿÿLQNÈV  5   ÈÈ   6   Qv   Q;   ¸   
=   V   : Q@ÈÈ     ÷ÍÔ ÙÉçççççççØÌÈÎÎ%Ï%ÏÎÎÎÌÐ.Ì0  ¹Ö ÐÔÿÿÿñÉçØÙÎ1 íÒ òÒÌÚË    mapStorageArgs	   next	   done   value   cal   createAttendee   id   commonName	   rsvp   FALSE	   TRUE	   role'   participationStatus   userType   isOrganizer   split   ,   :   setProperty%   decodeURIComponent   icalString   ERRORK   Error converting attendee, removing:     ÿÿÿÿ	          aAttendeeId       aCommonName       aRsvp       aRole       aStatus       aType       aIsOrganizer       aProperties       attendee               	   	   pair              
      key       value        ÿÿÿÿ          e                 R  º       
     ÿÿÿÿ   H  Æ          Y  ¨      ÿÿÿÿ            !  *   ÿÿÿÿÿÿÿÿI                 
            attendee_id      common_name   	   rsvp   	   role      status   	   type      is_organizer      properties                  ÿÿÿÿ   '   translateRecurrence                
      ¹   .   )      	          	       i            storArgs 7è  )ô        )        Q  Q  Q  Q  Q  Q  Q  
Q  	Q  Q  Q  Q  Q  Q  Q  Q  Q   Q;    â    T  : - Á
:  ¸   
:  5      Q   
5      Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     	Q¸   
:  5      Q   
5     
Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     Q¸   
:  5      Q   
5     QQQ  QV  =      b;   5   5   ¸   
;   5   	5   
: W  QV  ;   â   V  : 6   QV  V    6   Q  9  Q;   ¸   
:  W  QV  V  6   QV  V    6   QV     1V  V  6   Q     Qv  QÈ       V     }  Q  QV  ;   5   >  Q;   â   V  V     =      
=   :   QV     V  C6   QV  V  6   QÈ   V  @6   QV  V  6   Q     Qv  QÈ    Y   V  ]   V  ]   V  	]   V  
]   V  ]   V  ]   V  ]    V  ]   !V  ]   "  Q   V  K  Q   mW  V  V  7     Q  Q  Q=   #V    QV  V  7¸   $
:    QV  ¸   %
=   &: ¸   '
;   (:   QV  ¸   )
V  V  Ù   *V  : QÈãQLMÿÿÿgQNÈÈV  5   +ÈÈ   7   Qv   Q;   ¸   ,
=   -V   : QV   pÈ     ÒÿîÍ/Ô ÉççççççççççççççççØ Ê]ÖÏ 
 ÈÒÉÑÌÈÎÌ, ÓØxÑ$Ö$Ò
ÔÈ$Ë Ô ËÓÓÉÉÉÉÉÉÉÉÎÍ0  ÊÉ×$Ï$ÐÈ$Ð	× ï ?ÒÌÚÌ    mapStorageArgs	   next	   done   value   x-date   Components   classesO   @mozilla.org/calendar/recurrence-date;1   createInstance   interfaces%   calIRecurrenceDate	   date   textToDate   isNegative   cal)   createRecurrenceRule	   type   count   CAL_ITEM_FLAG   EVENT_ALLDAY   newDateTime      UTC   isDate   untilDate   interval   SECOND   MINUTE	   HOUR   DAY   MONTHDAY   YEARDAY   WEEKNO   MONTH   SETPOS   BY   toString   split   ,   map   parseInt10   setComponent   length   icalString   ERROR;   Error converting recurrence:     ÿÿÿÿ          aIndex       aType       aIsNegative       aDates       aCount       aEndDate       aInterval       aSecond       aMinute       aHour    	   aDay       aMonthday       aYearday       aWeekno       aMonth       aSetPos       aTmpFlags       ritem                     rtypes                    exc                    allday       untilDate                    exc                parseInt10!                        ¹                                              x yñ  ñ  4            ;    â    T  ×
: /Ó    parseInt                rtype                 	   comp    	   rstr       rarray        ÿÿÿÿ          e            Ö     #                    Ó            ¿  ÿÿÿÿ     3         ç           	  q                      «         9  ~      ÿÿÿÿÐ            Ø  +   ÿÿÿÿ                     tmp_date_tz                                    recur_index      recur_type      is_negative      dates      count      end_date      interval      second      minute   	   hour      day      monthday      yearday      weekno      month      setpos      tmp_date_tz                   ÿÿÿÿ         e         N   ~  	   Í  !   ÿÿÿÿ